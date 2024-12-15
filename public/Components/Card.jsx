import { BiLogoHtml5, BiLogoAndroid, BiBuilding } from 'react-icons/bi';

const course = [
    {
        title: 'Web Development',
        icon: <BiLogoHtml5 />,  // Corrected the capitalization
    },
    {
        title: 'App Development',
        duration: '2 Hours',
        icon: <BiLogoAndroid />
    },
    {
        title: 'UX & UI',  // Fixed missing starting quote
        duration: '2 Hours',
        icon: <BiBuilding />
    }, 
];

const Card = () => {
    return (
        <div className='card--container'>
            {course.map((item, index) => (
                <div className="card" key={index}>
                    <div className="card--cover">{item.icon}</div>
                    <div className="card--title">
                        <h2>{item.title}</h2> {/* Corrected to use curly braces for interpolation */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
