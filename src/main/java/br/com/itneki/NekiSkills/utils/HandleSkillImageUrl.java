package br.com.itneki.NekiSkills.utils;

import br.com.itneki.NekiSkills.domain.Skill;
import br.com.itneki.NekiSkills.dto.SkillResponseDTO;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.Optional;
import java.util.UUID;

@Component
public class HandleSkillImageUrl {
    @Autowired
    ModelMapper modelMapper;

    /**
     * Função responsável por transformar imagens Binárias em links de referência e então retornar
     * uma SkillResponse que contém dados da Skill e a URL da imagem.
     * @param id
     * @param skill
     * @return SkillResponseDTO
     */
    public SkillResponseDTO fromBinaryToUrl(UUID id, Optional<Skill> skill) {
        URI uri = ServletUriComponentsBuilder
                .fromCurrentContextPath()
                .path("/skills/{id}/image")
                .buildAndExpand(id)
                .toUri();
        SkillResponseDTO skillResponse = modelMapper.map(skill.get(), SkillResponseDTO.class);
        skillResponse.setImageUrl(uri.toString());
        return skillResponse;
    }
}
