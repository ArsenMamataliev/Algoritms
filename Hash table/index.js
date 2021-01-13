
const voted = {};
const checkVoter = () => {
    const name = ("Plese your name", "Steve");
    if (voted[name]){
        document.write(name + ' you have already voted');
    }else{
        voted[name] = true;
        document.write('Let you vote');
    }
}

checkVoter();

