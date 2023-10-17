package br.com.itneki.NekiSkills.dto;

import lombok.*;

import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class UserSkillResponseDTO {
    private SkillResponseDTO userSkills;
    private Integer skillLevel;
}
