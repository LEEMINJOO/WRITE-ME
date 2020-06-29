package com.WRITEME.dao;

import java.util.List;

import com.WRITEME.model.HintDTO;

public interface HintDAO {

	List<HintDTO> selectHint(HintDTO param) throws Exception;
}
