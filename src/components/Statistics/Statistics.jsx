import PropTypes from 'prop-types';
export default function Statistics({ title, stats }) {
    return (
        <section class="statistics">
            {title && (<h2 class="title">{title}</h2>)}
        
            <ul class="stat-list">
                {stats.map(item => (
                    <li class="item" key={item.id}>
                        <span class="label">{item.label}</span>
                        <span class="percentage">{item.percentage}%</span>
                    </li>
                ))}    
            </ul>
        </section>
        
    )
}
Statistics.propTypes = {
    title: PropTypes.string,
    // userName: PropTypes.string.isRequired,
    // tag: PropTypes.string.isRequired,
    // location: PropTypes.string.isRequired,
    // stats: PropTypes.objectOf(PropTypes.number),
}