import React,{Fragment} from 'react'
import Sidebar from '../Sidebar'
import { useSelector, useDispatch } from "react-redux";
import { deleteBlog } from "../../../redux/actions/blogAction";
import { FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./BlogList.css"
import BlogDescription from "./BlogDescription"; 
const BlogList = () => {

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const {  blogs } = useSelector((state) => state.blogs);

  // const { error: deleteError, isDeleted } = useSelector(
  //   (state) => state.blog
  // );

  const deleteblogHandler = (id) => {
    dispatch(deleteBlog(id));
  };

  return (

    <Fragment>
      {/* <MetaData title={`ALL blogs - Admin`} /> */}

      <div className="dashboard">
        <Sidebar />
        <div className="blogListContainer">
          <h1 id="blogListHeading">All blogs</h1>

          <div className="blogListTable">
            <table>
              <thead>
                <tr>
                  <th>blog ID</th>
                  <th>Title</th>
                 
                  <th>Image</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((item) => (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.title}</td>
                    <td>{item.image}</td>
                    <td>
                    <BlogDescription description={item.description} />
                      </td>
                    <td>
                      <Link to={`/admin/blog/${item._id}`}>
                        <FaEye />
                      </Link>
                      <button onClick={() => deleteblogHandler(item._id)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default BlogList