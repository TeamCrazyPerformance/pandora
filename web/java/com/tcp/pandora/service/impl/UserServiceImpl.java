package com.tcp.pandora.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.apache.ibatis.javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tcp.pandora.dao.CoupleDao;
import com.tcp.pandora.dao.UserDao;
import com.tcp.pandora.entity.Couple;
import com.tcp.pandora.entity.User;
import com.tcp.pandora.service.UserService;
import com.tcp.pandora.util.RandStringBuilder;


@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDao userDao = null;
	@Autowired
	private CoupleDao coupleDao = null;

	@Override
	public List<User> findAll() {
		return this.userDao.findAll();
	}

	@Override
	public List<User> findAll(HashMap<String, String> filter) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean joinUs(User user) {
		int nAdded = this.userDao.add(user);
		if (nAdded == 1) {
			return true;
		} else {
			return false;
		}
	}

	@Override
	public User findOne(String email) {
		return this.userDao.findOne(email);
	}

	@Override
	public boolean deleteOne(String email) {
		int nDeleted = this.userDao.deleteOne(email);
		if (nDeleted == 1) {
			return true;
		} else {
			return false;
		}
	}

	@Override
	public boolean updateOne(String email, User user)
		throws NotFoundException {
		
		HashMap<String, Object> m = new HashMap<>();
		m.put("pk", email);
		m.put("u", user);
		
		int nUpdated = this.userDao.update(m);
		if (nUpdated == 1) {
			return true;
		} else {
			return false;
		}
	}
	
	/**
	 * Couple 컬럼 중
	 *  - user_email1: sender (이메일주소)
	 *  - user_email2: receiver (핸드폰 번호)
	 *  - type [0: 연인관계 / 1: 친구관계 / 2: 가족관계]
	 *  - state
	 *    [0: 친구신청 발송 / 1: 친구신청 수락 / 2: 친구신청 거절 / 3: sender가 친구 끊음 / 4: receiver가 친구 끊음 / 5: 모두 친구 끊음]
	 *  - firstDay: receiver가 친구신청을 수락한 경우에 그 시간으로 인서트된다.
	 *    (sender가 발송한 시간은 현재는 저장하지 않는다)
	 * @throws NotFoundException 
	 */ 
	@Override
	public boolean askBeMyFriend(String sender, String receiver, int type)
			throws NotFoundException {
		
		User s = this.userDao.findOne(sender);
		User r = this.userDao.findByPhoneNum(receiver);
		
		if (r == null || s == null) 
			throw new NotFoundException("이메일주소 또는 핸드폰번호를 다시 확인하여주세요");
		
		Couple c = new Couple();
		c.setId(RandStringBuilder.create(13));
		c.setType(type);
		c.setState(0);
		c.setUserEmail1(s.getEmail());
		c.setUserEmail2(r.getEmail());
		
		int nAdded = this.coupleDao.add(c);
		if (nAdded == 1) {
			return true;
		} else {
			return false;
		}
  	}

	/**
	 * 특정 사용자의 모든 관계를 가져온다
	 * type - 친구(0)/연인(1)/가족(2)으로 필터링한다
	 * state
	 * 		- 내기 친구요청을 보낸 사람들(0)
	 * 		- 나에게 친구요청을 한 사람들만(1)
	 * 		- 친구인 상태 (친구요청, 수락을 모두 한 경우)(2)
	 * 그 외
	 * 		- 필드 이름을 지정해서 특정 컬럼만 가져올 수 있게 한다.
	 */
	@Override
	public List<User> findAllRelation(HashMap<String, String> filter) {
		String email = filter.get("email");
		List<Couple> couples = this.coupleDao.findByEmail(email);
		
		if (filter.containsKey("type")) {
			int type = Integer.parseInt(filter.get("type"));
			couples = couples.stream().filter(c -> c.getType() == type).collect(Collectors.toList());
		}
		
		if (filter.containsKey("state")) {
			int state = Integer.parseInt(filter.get("state"));
			couples = couples.stream().filter(c -> c.getState() == state).collect(Collectors.toList());
		}
		
		return null;
	}
}
