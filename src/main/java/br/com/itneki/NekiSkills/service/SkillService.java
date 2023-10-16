package br.com.itneki.NekiSkills.service;

import br.com.itneki.NekiSkills.domain.Skill;
import br.com.itneki.NekiSkills.dto.SkillResponseDTO;
import br.com.itneki.NekiSkills.repository.SkillRepository;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.hibernate.query.sqm.sql.ConversionException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOError;
import java.io.IOException;
import java.net.URI;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.UUID;

@Service
public class SkillService {
    @Autowired
    private SkillRepository repository;

    @Autowired
    private ModelMapper modelMapper;

    public List<SkillResponseDTO> findAllSkills(){
        List<Skill> skillList = repository.findAll();
        return skillList.stream()
                .map(skill -> handleSkillImageUrl(skill.getId(), Optional.of(skill)))
                .toList();
    }

    public SkillResponseDTO findSkillById(UUID id){
        Optional<Skill> skill = repository.findById(id);

        if(skill.isPresent()){
            return handleSkillImageUrl(id, skill);
        }
        else{
            throw new NoSuchElementException("Error! Skill not found with id: " + id);
        }
    }

    public Skill findSkillImageById(UUID id){
        return repository.findById(id).orElseThrow(() ->
                new NoSuchElementException("Error! Skill not found with id: " + id)
        );
    }
    public Skill saveSkill(String jsonSkill, MultipartFile imagem) {
        try{
            Skill skill = convertSkillFromStringJson(jsonSkill);
            skill.setImage(imagem.getBytes());
            return repository.save(skill);
        }catch(IOException e){
            throw new ConversionException("Error! Can't convert skill image to bytes! Caused by:" + e.getCause());
        }
    }
    public Skill updateSkill(UUID id, Skill skill){
        Optional<Skill> skillFound = repository.findById(id);
        if(skillFound.isPresent())
            return repository.save(skill);
        else
            throw new NoSuchElementException("Error! Can't found skill with id: " + id);
    };
    public boolean deleteSkill(UUID id){
        Optional<Skill> accountFound = repository.findById(id);
        if (accountFound.isPresent())
        {
            repository.deleteById(id);
            return true;
        }
        else
            return false;
    }

    private Skill convertSkillFromStringJson(String skillJson) {
        Skill skill;
        try {
            ObjectMapper objectMapper = new ObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES,
                    false);
            objectMapper.registerModule(new JavaTimeModule());
            skill = objectMapper.readValue(skillJson, Skill.class);
        } catch (IOException err) {
            throw new ConversionException("Error! Failed to convert to Skill Class. Caused by: "+ err.getCause());
        }
        return skill;
    }
    private SkillResponseDTO handleSkillImageUrl(UUID id, Optional<Skill> skill) {
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
