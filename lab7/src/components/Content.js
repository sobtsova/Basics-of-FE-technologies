import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFirst: false,
            activeSecond: false
        };
    }

    toggleFirst = () => {
        this.setState(prevState => ({ activeFirst: !prevState.activeFirst }));
    };

    toggleSecond = () => {
        this.setState(prevState => ({ activeSecond: !prevState.activeSecond }));
    };

    render() {
        const { activeFirst, activeSecond } = this.state;

        return (
            <div>
                <p><strong>Дата та місце народження:</strong> 14.04.2006, вул. Антоновича 17А, м. Київ, Україна.</p>

                <p><strong>Освіта:</strong> навчалась 11 років у спеціалізованій школі №17 м. Київ (нині ліцей №17 "Кирилівський"). 
                Останнє півріччя 11 класу закінчила у дистанційній школі "Оптіма". 
                Зараз навчаюсь у КПІ ім. Ігоря Сікорського, спеціальність "Інженерія програмного забезпечення".</p>

                <h3>Хоббі</h3>
                <ul>
                    <li 
                        onClick={this.toggleFirst} 
                        className={activeFirst ? "highlight1" : ""}
                        style={{cursor: 'pointer'}}
                    >
                        Комп'ютерні ігри
                    </li>
                    <li 
                        onClick={this.toggleSecond} 
                        className={activeSecond ? "highlight2" : ""}
                        style={{cursor: 'pointer'}}
                    >
                        Подорожі
                    </li>
                    <li>Гра на фортепіано</li>
                    <li>Перегляд серіалів, фільмів та аніме</li>
                </ul>

                <h3>Улюблені фільми</h3>
                <ol>
                    <li>"Інтерстеллар", 2014</li>
                    <li>"Гаррі Поттер", 2001-2011</li>
                    <li>"Мовчання ягнят", 1991</li>
                </ol>

                <h3>Моє улюблене місто</h3>
                <p>
                    Мені дуже сподобалось місто <strong>Шверте</strong>, яке розташоване в землі Північний Рейн-Вестфалія.
                    Це тихе та затишне містечко, де переважно живуть люди похилого віку.
                    Особливо вражає природа – зелені парки, вузькі вулички.
                </p>
            </div>
        );
    }
}

export default Content;