import { Link } from "react-router-dom";

export const Lessons = ({ data }) => {
    const { Title, img, description, id } = data;
    return (
        <div className='col'>
            <div className="card">
                <Link to={`/detailsLesson/${id}`} >
                <img src={img} className="card-img-top" alt="" />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{Title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        </div >
    )
}
