package com.example.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.domain.Member;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @author xw.s
 * @date 2021/5/20
 */
@Mapper
public interface MemberMapper extends BaseMapper<Member> {

    List<Member> selectMemberByName(@Param("name") String name);
}
