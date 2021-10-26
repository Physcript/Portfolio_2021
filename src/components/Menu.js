
import { Image,Label,Button } from 'semantic-ui-react'

const Menu = () => {
    return (
        <div className = 'display-flex-center gap-2'  >

            <div style = {{ background: 'white', padding: '10px' }}>
                <Image size = 'small' centered src = 'https://res.cloudinary.com/dnnq8kne2/image/upload/v1635236181/ur7lqt1pv3tzoadj5r0m.jpg' fluid/>
                <label>Batino john patrick</label>
            </div>

            <div className = 'display-flex menu gap-1' style = {{ color: 'white', padding: '10px' }}>
                <label onClick = { console.log('') } style = {{ cursor: 'pointer' }} >About</label>
                <label onClick = { console.log('') } style = {{ cursor: 'pointer' }} >Project</label>
                <label onClick = { console.log('') } style = {{ cursor: 'pointer' }} >Skill</label>
                <label onClick = { console.log('') } style = {{ cursor: 'pointer' }} >Contact</label>
            </div>
        </div>
    )
}


export default Menu