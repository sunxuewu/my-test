package com.example.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.domain.Member;
import com.example.mapper.MemberMapper;
import com.example.service.IMemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class MemberServiceImpl extends ServiceImpl<MemberMapper, Member> implements IMemberService {

}
