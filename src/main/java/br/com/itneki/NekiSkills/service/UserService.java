package br.com.itneki.NekiSkills.service;

import br.com.itneki.NekiSkills.domain.Skill;
import br.com.itneki.NekiSkills.domain.User;
import br.com.itneki.NekiSkills.dto.SkillResponseDTO;
import br.com.itneki.NekiSkills.repository.SkillRepository;
import br.com.itneki.NekiSkills.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    private UserRepository repository;

    public List<User> findAllUsers() {
        return repository.findAll();
    }

    public User findUserById(UUID id){
        return repository.findById(id)
                         .orElseThrow(() -> new NoSuchElementException("Error! User not found with id: " + id));
    }

    public User saveUser(User user){
        return repository.save(user);
    }

    public User updateUser(UUID id, User user){
        Optional<User> userFound = repository.findById(id);
        if(userFound.isPresent())
            return repository.save(user);
        else
            throw new NoSuchElementException("Error! Can't found user with id: " + id);
    }

    public boolean deleteUser(UUID id){
        Optional<User> userFound = repository.findById(id);
        if (userFound.isPresent())
        {
            repository.deleteById(id);
            return true;
        }
        else
            return false;
    }
}
