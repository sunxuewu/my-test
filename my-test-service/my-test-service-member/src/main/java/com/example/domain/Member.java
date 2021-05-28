package com.example.domain;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class Member {
	private Long id;
	private String name;
	private int age;
}
