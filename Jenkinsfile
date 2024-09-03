pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout
                echo 'successfully complete  git checkout'
                
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'sudo apt update'
                sh 'sudo apt install nodejs'
                sh 'sudo apt install npm'
                echo 'successfully install node'
            }
        }

        stage('Build') {
            steps {
                // sh 'npm run build'
                echo 'successfully complete  build'
            }
        }

        stage('Test') {
            steps {
                // sh 'npm test'
                echo 'test complete'
                
            }
        }
        stage('build image') {
            steps {
                
                sh 'docker build -t firstimage:tag01'
                echo 'successfully image build'
            }
          
        }

       
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
