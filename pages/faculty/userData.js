export default function AllStudentG({ data }) {
  return (
    <>
      <h2>Show All Student Grade</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Student Id</th>
            <th>Course Id</th>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <td>{data.id}</td>
          <td>{data.studentId}</td>
          <td>{data.curseId}</td>
          <td>{data.subject}</td>
        </tbody>
      </table>
    </>
  );
}
