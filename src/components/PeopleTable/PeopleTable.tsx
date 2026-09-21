import type { Person } from "../../@types/people"

type PeopleTableProps = {
    people: Person[]
}
export default function PeopleTable({ people }: PeopleTableProps) {

    return (
        <table>
            <PeopleTableHead />
            <tbody>
                {people.map(person => <PeopleTableRow key={person.id} person={person} />)}
            </tbody>
        </table>
    )
}

type PeopleTableRowProps = {
    person: Person
}
function PeopleTableRow({ person } : PeopleTableRowProps) {
    return (
        <tr>
            <td>{person.firstname}</td>
            <td>{person.lastname}</td>
        </tr>
    )
}

function PeopleTableHead() {
    return (
        <thead>
            <th>Prénom</th>
            <th>Nom</th>
        </thead>
    )
}
