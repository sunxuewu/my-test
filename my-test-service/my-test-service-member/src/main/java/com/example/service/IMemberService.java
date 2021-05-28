package com.example.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.domain.Member;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface IMemberService extends IService<Member> {

    List<Member> selectMemberByName(String name);
}
