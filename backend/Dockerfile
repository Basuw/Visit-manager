FROM openjdk:21

WORKDIR /app

EXPOSE 8080

RUN rm -rf /app/*

#COPY pom.xml /app/pom.xml

COPY target/backend-0.0.1-SNAPSHOT.jar /app/backend-0.0.1-SNAPSHOT.jar

CMD ["java", "-jar", "backend-0.0.1-SNAPSHOT.jar"]
