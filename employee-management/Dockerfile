# Use an official OpenJDK image as the base
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /FullStack-Application/employee-management

# Copy the Spring Boot JAR file into the image
COPY target/employee-management.jar app.jar

# Expose the port your Spring Boot application runs on
EXPOSE 8080

# Run the Spring Boot application
CMD ["java", "-jar", "app.jar"]
