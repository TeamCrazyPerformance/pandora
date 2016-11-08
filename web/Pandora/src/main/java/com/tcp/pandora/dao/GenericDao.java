package com.tcp.pandora.dao;

import java.util.List;

public interface GenericDao<VoType, PkType> {
	public int add(VoType vo);
	public List<VoType> findAll();
	public VoType findOne(PkType pk);
	public int update(VoType vo);
	public int deleteOne(PkType pk);
	public int count();
}
