export function Table(props) {
    return (
        <table className="table">
            <thead>
                <TableHeader></TableHeader>
            </thead>
            <tbody>
                {props.data.map(row => <TableRow item={row} key={row.id} />)}
            </tbody>
        </table>
    )
}

export function TableHeader(props) {
    return (
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
        </tr>
    )
}

export function TableRow(props) {
    return (
        <tr>
            <td>{props.item.id}</td>
            <td>{props.item.name}</td>
            <td>{props.item.email}</td>
            <td>{props.item.status}</td>
        </tr>
    )
}
