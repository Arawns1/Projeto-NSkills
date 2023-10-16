package br.com.itneki.NekiSkills.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "tb_user")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "usr_cd_id")
    private UUID id;

    @Column(name = "usr_tx_login")
    private String login;

    @Column(name = "usr_tx_password")
    private String password;

    @OneToMany(mappedBy = "user")
    private Set<UserSkill> userSkills;
}
