package com.example.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.domain.User;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface IUserService extends IService<User> {
}
