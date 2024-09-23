# Stage 1: Build the application using Maven and OpenJDK 17
FROM maven:3.8.6-eclipse-temurin-17 AS build

# Set the working directory for the build
WORKDIR /app

# Copy the rest of the source code
COPY pom.xml ./
COPY src ./src
COPY media ./media

# Build the application (creates a JAR file)
RUN mvn clean package -DskipTests

# Stage 2: Use the built JAR and create a slimmer final image
FROM openjdk:17-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build /app/target/techtrendz-api-0.0.1-SNAPSHOT.jar /app/techtrendz-api-0.0.1-SNAPSHOT.jar

# Expose the port your application runs on
EXPOSE 3006

# Allow the profile to be set dynamically via environment variable, with "prod" as the default profile
ENV SPRING_PROFILES_ACTIVE=prod

# Ensure the container has access to the file system for saving files
VOLUME ["/app/data", "/app/media"]

# Run the Spring Boot application with the active profile
ENTRYPOINT ["java", "-jar", "/app/techtrendz-api-0.0.1-SNAPSHOT.jar", "--spring.profiles.active=${SPRING_PROFILES_ACTIVE}"]
