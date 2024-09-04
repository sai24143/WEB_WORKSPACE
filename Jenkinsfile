pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo 'successfully complete  git checkout'
                 
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'installing dependencies....'
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
        stage('Build Image') {
            steps {
                
                sh 'docker build -t firstimage:1.011 .'
                echo 'successfully image build'
            }
          
        }
        
       
        stage('Push Docker Hub') {
            steps {
                
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentialss', passwordVariable: 'sai123@sai', usernameVariable: 'sumanth24143')]) {
                    
                    sh 'docker login -u "$sumanth24143" -p "$sai123@sai" '
                    sh 'docker tag firstimage:1.011 sumanth24143/firstimage:2.012 '
                    sh 'docker push sumanth24143/firstimage:2.012 '
                    sh 'docker logout'
    // some block

                
                
                
            }
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

      
