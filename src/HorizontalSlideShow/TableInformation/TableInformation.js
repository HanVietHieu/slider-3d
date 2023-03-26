export default function TableInformation({ informationImage = [] }) {
  const { name, width, height, color, guide } = informationImage;
  return (
    <ul className="table-menu">
      <h3>
        <p>Image information</p>
      </h3>
      <li>(1) Name: {name}</li>
      <li>(2) Width: {width}</li>
      <li>(3) Height: {height}</li>
      <li>(4) color: {color}</li>
      <li>
        (5) Planting guide:{" "}
        <a href={guide} target="_blank">
          {guide}
        </a>
      </li>
    </ul>
  );
}
