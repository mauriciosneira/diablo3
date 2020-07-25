export function getCoreAttributes(state){
    return (attributes) => {
        return state.coreAttributes.map( item => ({ name: item, val: attributes[item] }) )
    }
 }

export function getSecondaryAttributes() {
    const secondaryAttributes = ['damage', 'toughness', 'healing']
    return (attributes) => {
        return secondaryAttributes.map( item => ({ name: item, val: attributes[item] }) )
    }
}

export function getSkillImg() {
    const sizes = [21, 42, 64]
    return (skill) => {
        return `http://media.blizzard.com/d3/icons/skills/${sizes[1]}/${skill.icon}.png`
    }
}

export function getItemImg(){
    return (item, zise) => {
        return `http://media.blizzard.com/d3/icons/items/${zise}/${item.icon}.png`
    }
}