import PropTypes from 'prop-types';
import { Section, Stat } from './Statistics.styled';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Statistics = ({ title, data }) => {
  return (
    <Section>
      {title && <h2>{title}</h2>}
      <Stat>
        {data.map(({ id, label, percentage }) => (
          <li key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </li>
        ))}
      </Stat>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
