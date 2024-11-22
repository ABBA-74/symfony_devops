[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ABBA-74_symfony_devops&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ABBA-74_symfony_devops)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=ABBA-74_symfony_devops&metric=bugs)](https://sonarcloud.io/summary/new_code?id=ABBA-74_symfony_devops)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=ABBA-74_symfony_devops&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=ABBA-74_symfony_devops)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ABBA-74_symfony_devops&metric=coverage)](https://sonarcloud.io/summary/new_code?id=ABBA-74_symfony_devops)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=ABBA-74_symfony_devops&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=ABBA-74_symfony_devops)


# CI/CD Automation Project for Symfony 7.1

This project demonstrates a **Continuous Integration/Continuous Deployment (CI/CD)** pipeline tailored for a **Symfony 7.1** application. The pipeline ensures seamless code quality checks, Docker image creation, and deployment to a production server using **Docker Compose**.

---

## **Principles**

### **1. Continuous Integration**
- Code quality is analyzed with **SonarQube** to ensure compliance with best practices and detect potential vulnerabilities.
- Symfony-specific validations, such as configuration and template linting, are performed to maintain code integrity.

### **2. Continuous Delivery**
- A Docker image for the application is built and pushed to **Docker Hub** as part of the pipeline.
- This image serves as the production-ready artifact.

### **3. Continuous Deployment**
- The pipeline remotely executes a deployment script on a **Virtual Private Server (VPS)**.
- The deployment involves:
  - Pulling the latest Docker image from Docker Hub.
  - Restarting the application using **Docker Compose**.
  - Cleaning up unused Docker images to optimize server resources.
  - Logging the deployment status for monitoring and debugging purposes.

---

## **Workflow Overview**
1. **Code Changes**:  
   The pipeline is triggered by changes pushed to the repository or pull requests.

2. **Automated Checks**:  
   The pipeline runs code quality analysis, Symfony validations, and builds a Docker image.

3. **Image Publishing**:  
   The Docker image is pushed to a repository on **Docker Hub**.

4. **Production Deployment**:  
   The latest Docker image is pulled and deployed on the VPS using Docker Compose.

---

## **Setup**
To implement this workflow, the following are required:
- A Symfony 7.1 application.
- A Docker Hub account for storing images.
- A VPS with Docker and Docker Compose installed.
- A SonarQube server for code analysis.
- Secrets configured in the repository for secure authentication and remote access.

---

## **Advantages**
- **Automation**: Reduces manual intervention and ensures faster deployment cycles.
- **Code Quality**: Enforces best practices and improves application reliability.
- **Scalability**: Simplifies deployment to multiple environments.
- **Resource Optimization**: Automated cleanup of unused Docker images saves server space.

---

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=ABBA-74_symfony_devops)](https://sonarcloud.io/summary/new_code?id=ABBA-74_symfony_devops)
[![SonarQube Cloud](https://sonarcloud.io/images/project_badges/sonarcloud-light.svg)](https://sonarcloud.io/summary/new_code?id=ABBA-74_symfony_devops)