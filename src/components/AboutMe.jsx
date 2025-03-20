import '../styles/aboutMe.css';


const AboutMe = () => {

return(
    <div className="about-container">
                <h1 className="about-title">About me</h1>
                
                
                <div className="content-wrapper">
                    <div className="about-text">
                            <p style={{margin: 0}}>I am a passionate full-stack developer with a strong foundation in both front-end and back-end development. 
                                Currently pursuing my bachelor's degree in Information and Communication Technology, I combine academic knowledge with practical 
                                experience in building web and mobile applications.
                            </p>

                            <p style={{ marginTop: '1rem' }}>
                                My technical expertise includes React, React-Native, Flask and various modern web technologies. I'm particularly 
                                interested in creating efficient, user-friendly applications that solve real-world problems.
                            </p>
                            
                    </div>
                    <div className="education-box" style={{
                        backgroundColor: 'white',
                    }}>
                        <h3 className="education-heading">
                            Education</h3>
                        
                        <div className="education-content" style={{
                            margin: 0
                        }}>
                            <h4 style={{
                                fontFamily: 'Poppins',
                                fontSize: '16px',
                                color: '#000'
                            }}>University of Turku</h4>
                            <p style={{
                                fontFamily: 'Poppins',
                                fontSize: '16px',
                                color: '#525150',
                                marginTop: '0.5rem'
                            }}>B.Sc. ICT</p>
                            <p style={{
                                fontFamily: 'Poppins',
                                fontSize: '16px',
                                color: '#525150',
                                marginTop: '0.25rem'
                            }}>2023 - Present</p>
                        </div>
                    </div>
                    
                </div>
            </div>
    );
}

export default AboutMe;