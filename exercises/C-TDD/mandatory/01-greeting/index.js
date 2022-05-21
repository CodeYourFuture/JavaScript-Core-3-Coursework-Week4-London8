const greet = (name) => {
    if (name === null) {
        return `Hello, my friend.`;
    }   else if (Array.isArray(name)) {
        if(name.length > 2) {
        let lastName = name[name.length - 1];
        name[name.length - 1] = `and ${lastName}`;
        return `Hello, ${name.join(", ")}.`;
        } else {
            return `Hello, ${name.join(" and ")}.`;
        }
    } else if (name === name.toUpperCase()) {
        return `HELLO ${name}!`;
    }
    return `Hello, ${name}`;
}

module.exports = greet;