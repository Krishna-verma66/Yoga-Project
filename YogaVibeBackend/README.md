# YogaVibe Backend

Spring Boot backend for the YogaVibe application.
This backend manages user authentication, yoga sessions, progress tracking, and user profile data.

## Tech Stack

* Java 17
* Spring Boot
* Spring Security
* JWT Authentication
* PostgreSQL
* Hibernate / JPA
* Maven

## Setup

Clone the project:

```bash
git clone <repository-url>
cd YogaVibe-backend
```

Configure database in `application.properties`

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/YogaVibe
spring.datasource.username=postgres
spring.datasource.password=your_password
```

Run the project:

```bash
mvn spring-boot:run
```

## Main APIs

* POST `/api/auth/register`
* POST `/api/auth/login`
* GET `/api/yoga`
* POST `/api/progress`
* GET `/api/user/profile`

## Folder Structure

* controller
* service
* repository
* model
* dto
* config
* security
