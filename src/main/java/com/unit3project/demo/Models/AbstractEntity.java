package com.unit3project.demo.Models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import java.util.Objects;

    @MappedSuperclass
    public abstract class AbstractEntity {

        @Id
        @GeneratedValue
        private int id;

        @Size(min=1, max = 100, message="Please enter a valid response between 1 and 100 characters.")
        @NotBlank(message="Please enter a valid response between 1 and 100 characters.")
        private String name;

        @Override
        public String toString() {
            return name;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            AbstractEntity that = (AbstractEntity) o;
            return getId() == that.getId();
        }

        @Override
        public int hashCode() {
            return Objects.hash(getId());
        }

        public int getId() {
            return id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }


