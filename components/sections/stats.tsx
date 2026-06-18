import { stats } from "@/data/site";

export function Stats() {
    return (
        <section className="stats-band">
            <div className="wrap">
                <div className="glass reveal">
                    <div className="stats-inner">
                        {stats.map((stat) => (
                            <div className="stat" key={stat.label}>
                                <div className="stat-num grad-text">
                                    <span data-count={stat.count} data-suffix={stat.suffix ?? ""}>
                                        0
                                    </span>
                                </div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
