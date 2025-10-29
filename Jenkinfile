pipeline {
agent any


stages {
stage('Clone Repository') {
steps {
git 'https://github.com/<your-username>/nodejs-docker-jenkins.git'
}
}


stage('Build Docker Image') {
steps {
sh 'docker build -t nodejs-app .'
}
}


stage('Run Container') {
steps {
sh 'docker stop nodejs-app || true'
sh 'docker rm nodejs-app || true'
sh 'docker run -d -p 3000:3000 --name nodejs-app nodejs-app'
}
}
}
}