package com.example.vo.test.index;

import com.example.domain.Member;
import com.example.domain.User;
import lombok.Builder;
import lombok.Data;


/**
 * @name: UserVo
 * @description:
 * @author: xw.s
 * @date: 2021/5/26-14:25
 */
@Data
@Builder
public class UserVo {
    private User user;
    private Member member;
}
