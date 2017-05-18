export class ResourceNamer {

    public static nameInPath(name:string) {
        if (name.length == 1) return name.toLowerCase();

        let result = [name.charAt(0).toLowerCase()];
        let nameArr = name.split('');
        for (let i = 1; i < name.length; i++) {
            let char = name[i];
            if (char.toUpperCase() == char) {
                result.push('-');
            }
            result.push(char.toLowerCase());
        }

        return result.join('');
    }

}