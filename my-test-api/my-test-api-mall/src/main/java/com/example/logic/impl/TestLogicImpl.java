package com.example.logic.impl;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.domain.Member;
import com.example.domain.User;
import com.example.logic.ITestLogis;
import com.example.mapper.MemberMapper;
import com.example.service.IMemberService;
import com.example.service.IUserService;
import com.example.vo.test.index.UserVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
public class TestLogicImpl implements ITestLogis {

    @Autowired
    private IUserService userService;
    @Autowired
    private IMemberService memberService;

    @Override
    public UserVo test() {
        User user = userService.getById(1);
        Member member = memberService.getById(1);
        return UserVo.builder().user(user).member(member).build();
    }
}
