type WelcomeProps =  { 
    firstname?: string, 
    lastname: string
};

export default function Welcome({ firstname = '', lastname } : WelcomeProps) {

    return (
        <p>Bienvenue {firstname} {lastname} !</p>
    )
}


// const Welcome2 = () => <p>Bienvenue !</p>;
// export default Welcome2;