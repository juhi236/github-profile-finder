import './styles.css'

export default function User({ user }) {

    const { avatar_url, followers, following, public_repos, name, login, created_at } = user;

    const createdDate = new Date(created_at)

    return <div className="user">
        <div>
            <img src={avatar_url} className="avatar" alt="User" />
        </div>
        <div>
            <a href={`https://github.com/${login}`}>{name || login}</a>
            <p className='userjoinedon'>
                User joined on{" "}
                {
                    `${createdDate.getDate()} ${createdDate.toLocaleString("en-us", { month: "short", })} ${createdDate.getFullYear()}`
                }
            </p>
        </div>
        <div>
            <div>
                <p className='head'>Public Repos</p>
                <p className='ans'>{public_repos}</p>
            </div>
            <div>  <p className='head'>Followers</p>
                <p className='ans'>{followers}</p></div>
            <div>  <p className='head'>Following</p>
                <p className='ans'>{following}</p></div>
        </div>
    </div>
}