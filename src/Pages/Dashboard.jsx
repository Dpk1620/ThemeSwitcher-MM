import { useState, useEffect } from "react"
import { useThemeContext } from '../context/ThemeContext'

const Dashboard = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    setUsers(data)
  }
  const { color } = useThemeContext(useThemeContext)

  useEffect(() => {
    document.title="Moris-Media: Dashboard"
    fetchData()
  }, [])
  return (
    <div style={{ height: "70vh" }}
    >
      <div className="central">
        {users.length > 0 && (
          <div className="row">
            {users.map((user, index) => (
              <div className="mainCentral" style={{ backgroundColor: color }} key={user.id}>
                <div className="card">
                  <div className="card-title" style={{ padding: "10px", width: "auto", height: "80px" }}>
                    <div className="fontSizecard">
                      <span>
                        <b>Name:</b> <span style={{ color: color }}>{user.name}</span>
                      </span>
                      <br />
                      <span>
                        <b>Id:</b> {index?index:1}
                      </span>
                      <br />
                      <span>
                        <b >Company</b>: <span style={{color:"red"}}>Moris Media</span> 
                      </span>

                    </div>
                  </div>
                </div></div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard