package com.example.logic;

import com.example.vo.test.index.UserVo;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface ITestLogis {

    UserVo test();
}
