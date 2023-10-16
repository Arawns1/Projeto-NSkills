package br.com.itneki.NekiSkills.config;

import br.com.itneki.NekiSkills.domain.Skill;
import br.com.itneki.NekiSkills.dto.SkillResponseDTO;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperConfig {
    @Bean
    public ModelMapper modelMapper() {
        var modelMapper = new ModelMapper();
        modelMapper.typeMap(Skill.class, SkillResponseDTO.class).addMappings(mapper -> {
            mapper.map(Skill::getId, SkillResponseDTO::setId);
            mapper.map(Skill::getName, SkillResponseDTO::setName);
            mapper.map(Skill::getDescription, SkillResponseDTO::setDescription);
        });

        return modelMapper;
    };

}
