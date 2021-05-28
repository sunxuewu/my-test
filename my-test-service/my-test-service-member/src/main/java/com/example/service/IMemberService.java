package com.example.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.domain.Member;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface IMemberService extends IService<Member> {
}
