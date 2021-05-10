//////////////////////////////////////////////////////////// Наш Календар ////////////////////////////////////////////////////////////

let day = +prompt("Enter day -> "),
    month = +prompt("Enter month -> "),
    year = +prompt("Enter year -> ");

if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12 || year < 1)
{
    console.error("Error!!!");
}
else
{
    switch (true)
    {
        case day >= 21 && month == 3 || day <= 19 && month == 4:
            img = '<img src="https://www.kartinki24.ru/uploads/gallery/thumb/279/kartinki24_ru_zodiac_signs_135.jpg" alt="">'
            title = '<h2>ЗНАК ОВЕН</h2>';
            description = '<p>Овен — первый знак Зодиака, символизирующий активное проявление в мире. Символ знака — голова барана. Это символ наступательной мощи, стремления к жизни, инициативы и смелости. Овен — знак Огня, кардинальный. Управитель знака Овен — Марс. Экзальтация Солнца. Изгнание Венеры. Падение Сатурна.</p>';
            break;
        case day >= 20 && month == 4 || day <= 20 && month == 5:
            img = '<img src="https://www.kartinki24.ru/uploads/gallery/thumb/279/kartinki24_ru_zodiac_signs_140.jpg" alt="">'
            title = '<h2>ЗНАК ТЕЛЕЦ</h2>';
            description = '<p>Телец — второй знак Зодиака. Его символ — голова и рога быка. Это символ силы воли, упорства и развития. Телец — знак Земли, фиксированный. Управитель знака Телец — Венера. Экзальтация Луны. Изгнание Марса. Падение Урана.</p>';
            break;
        case day >= 21 && month == 5 || day <= 20 && month == 6:
            img = '<img src="https://www.kartinki24.ru/uploads/gallery/thumb/279/kartinki24_ru_zodiac_signs_129.jpg" alt="">'
            title = '<h2>ЗНАК БЛИЗНЕЦЫ</h2>';
            description = '<p>Близнецы — третий знак Зодиака. Его символ — два куска дерева, соединенные между собой. Это символ противоборствующих ментальных процессов, взаимопроникновения духа и материи, связь ритма и формы. Близнецы — знак Воздуха, мутабельный. Управитель знака Близнецы — Меркурий. Изгнание Юпитера.</p>';
            break;
        case day >= 21 && month == 6 || day <= 22 && month == 7:
            img = '<img src="https://www.kartinki24.ru/uploads/gallery/thumb/279/kartinki24_ru_zodiac_signs_136.jpg" alt="">'
            title = '<h2>ЗНАК ЗОДИАКА РАК</h2>';
            description = '<p>Рак — четвертый знак Зодиака. Его символ — клешни краба, стремящиеся сомкнуться. Это символ слияния мужской и женской половых клеток, материнства, стремление к росту, развитию. Рак — знак Воды, кардинальный. Управитель знака Рак — Луна. Экзальтация Юпитера. Изгнание Сатурна. Падение Марса.</p>';
            break;
        case day >= 23 && month == 7 || day <= 22 && month == 8:
            img = '<img src="https://www.kartinki24.ru/uploads/gallery/thumb/279/kartinki24_ru_zodiac_signs_134.jpg" alt="">'
            title = '<h2>ЗНАК ЛЕВ</h2>';
            description = '<p>Лев — пятый знак Зодиака. Его символ — сперматозоид. Это символ животворящей энергии, силы и удачи. Лев — знак Огня, фиксированный. Управитель знака Лев - Солнце. Экзальтация Плутона. Изгнание Урана. Падение Меркурия.</p>';
            break;
        case day >= 23 && month == 8 || day <= 22 && month == 9:
            img = '<img src="https://www.kartinki24.ru/uploads/gallery/thumb/279/kartinki24_ru_zodiac_signs_132.jpg" alt="">'
            title = '<h2>ЗНАК ДЕВА</h2>';
            description = '<p>Дева — шестой знак Зодиака. Его символ — сноп колосьев. Это символизирует непорочность зачатия, человеческую добродетель, критичность, практичность, помощь. Дева — знак Земли, мутабельный. Управитель знака Дева — Меркурий. Экзальтация Меркурия. Изгнание Нептуна. Падение Венеры.</p>';
            break;
        case day >= 23 && month == 9 || day <= 22 && month == 10:
            img = '<img src="https://www.kartinki24.ru/uploads/gallery/thumb/279/kartinki24_ru_zodiac_signs_130.jpg" alt="">'
            title = '<h2>ЗНАК ВЕСЫ</h2>';
            description = '<p>Весы — седьмой знак Зодиака. Его символ — две чаши весов. Это обозначает стремление к устойчивости, гармонии, осознанию высшего Закона мироздания, объективности суждений. Весы символизируют закат Солнца. Весы — знак Воздуха, кардинальный. Управитель знака Весы — Венера. Экзальтация Сатурна. Изгнание Марса. Падение Солнца.</p>';
            break;
        case day >= 23 && month == 10 || day <= 21 && month == 11:
            img = '<img src="https://www.kartinki24.ru/uploads/gallery/thumb/279/kartinki24_ru_zodiac_signs_138.jpg" alt="">'
            title = '<h2>ЗНАК ЗОДИАКА СКОРПИОН</h2>';
            description = '<p>Скорпион — восьмой знак Зодиака. Его символ в разные эпохи по-разному понимался и изображался главным образом как скорпион, аспид, змея. В нашу эпоху этот символ изображается как скорпион: лапы и хвост, в котором находится жало. Скорпион — знак Воды, фиксированный. Управитель знака Зодиака Скорпион — Плутон. Экзальтация Урана. Изгнание Венеры. Падение Луны.</p>';
            break;
        case day >= 22 && month == 11 || day <= 21 && month == 12:
            img = '<img src="https://www.kartinki24.ru/uploads/gallery/thumb/279/kartinki24_ru_zodiac_signs_140_2.jpg" alt="">'
            title = '<h2>ЗНАК СТРЕЛЕЦ</h2>';
            description = '<p>Стрелец — девятый знак Зодиака. Его символ — стрела и лук. Изображается главным образом в виде кентавра. Ключевые слова к раскрытию его символа: целеустремленность, энтузиазм, прогрессивность, щедрость. Стрелец — знак Огня, мутабельный. Управитель знака Стрелец — Юпитер. Экзальтация Хирона. Изгнание Меркурия.</p>';
            break;
        case day >= 22 && month == 12 || day <= 19 && month == 1:
            img = '<img src="https://www.kartinki24.ru/uploads/gallery/thumb/279/kartinki24_ru_zodiac_signs_133.jpg" alt="">'
            title = '<h2>ЗНАК КОЗЕРОГ</h2>';
            description = '<p>Козерог — десятый знак Зодиака. Его символ — голова и передняя часть туловища козла, а задняя часть рыбья. Мифологически этот символ воплощает представления о тритонах, дельфинах, «морских козлах». Все это символизирует крайности высот и глубин, справедливость, сочетание индивидуального и общечеловеческого. Козерог — знак Земли, кардинальный. Управитель знака Козерог — Сатурн. Экзальтация Марса. Изгнание Луны. Падение Юпитера.</p>';
            break;
        case day >= 20 && month == 1 || day <= 18 && month == 2:
            img = '<img src="https://www.kartinki24.ru/uploads/gallery/thumb/279/kartinki24_ru_zodiac_signs_131.jpg" alt="">'
            title = '<h2>ЗНАК ВОДОЛЕЙ</h2>';
            description = '<p>Водолей — одиннадцатый знак Зодиака. Его символ — две волны, которые обозначают «живую» и «мертвую» воду. Часто изображается в виде человека, выливающего из кувшина воду, что должно обозначать слугу человечества, стремящегося утолить жажду познания. Водолей - знак Воздуха, фиксированный. Управители знака Водолей — Уран и Сатурн. Экзальтация Меркурия. Изгнание Солнца. Падение Плутона.</p>';
            break;
        case day >= 19 && month == 2 || day <= 20 && month == 3:
            img = '<img src="https://www.kartinki24.ru/uploads/gallery/thumb/279/kartinki24_ru_zodiac_signs_137.jpg" alt="">'
            title = '<h2>ЗНАК РЫБЫ</h2>';
            description = '<p>Рыбы — двенадцатый знак Зодиака. Его символ — две рыбы, связанные хвостами, стремящиеся в разные стороны, скитаются в просторах океана. Это символизирует жизнь после смерти, борьбу души и тела, подавленность самовыражения. Рыбы — знак Воды, мутабельный. Управитель знака Рыбы — Нептун. Экзальтация Венеры. Изгнание и падение Меркурия.</p>';
            break;
    }
    document.write(img + title + description);

//////////////////////////////////////////////////////////// Китайський Календар ////////////////////////////////////////////////////////////

    year = year % 12;

    switch (true)
    {
        case year == 3 || year == 4:
            img = '<img src="https://www.chinahottour.ru/uploads/allimg/culture/shu.jpg" alt="">'
            title = '<h2>Крыса</h2>';
            description = '<p>Умный и веселый</p>';
            break;
        case year == 4 || year == 5:
            img = '<img src="https://www.chinahottour.ru/uploads/allimg/culture/niu.jpg" alt="">'
            title = '<h2>Бык</h2>';
            description = '<p>Сильный характер</p>';
            break;
        case year == 5 || year == 6:
            img = '<img src="https://www.chinahottour.ru/uploads/allimg/culture/hu.jpg" alt="">'
            title = '<h2>Тигр</h2>';
            description = '<p>Достаточно смелый и храбрый</p>';
            break;
        case year == 6 || year == 7:
            img = '<img src="https://www.chinahottour.ru/uploads/allimg/culture/tu.jpg" alt="">'
            title = '<h2>Кролик</h2>';
            description = '<p>Чувствительный и интуитивный</p>';
            break;
        case year == 7 || year == 8:
            img = '<img src="https://www.chinahottour.ru/uploads/allimg/culture/long.jpg" alt="">'
            title = '<h2>Дракон</h2>';
            description = '<p>Активный и эгоистичный</p>';
            break;
        case year == 8 || year == 9:
            img = '<img src="https://www.chinahottour.ru/uploads/allimg/culture/she.jpg" alt="">'
            title = '<h2>Змея</h2>';
            description = '<p>Живой и слегка эгоистичный</p>';
            break;
        case year == 9 || year == 10:
            img = '<img src="https://www.chinahottour.ru/uploads/allimg/culture/ma.jpg" alt="">'
            title = '<h2>Лошадь</h2>';
            description = '<p>Скрытый потенциал</p>';
            break;
        case year == 10 || year == 11:
            img = '<img src="https://www.chinahottour.ru/uploads/allimg/culture/yang.jpg" alt="">'
            title = '<h2>Коза</h2>';
            description = '<p>Без существенных черт характера</p>';
            break;
        case year == 11 || year == 12:
            img = '<img src="https://www.chinahottour.ru/uploads/allimg/culture/hou.jpg" alt="">'
            title = '<h2>Обезьяна</h2>';
            description = '<p>Ловкий и хитрый</p>';
            break;
        case year == 12 || year == 1:
            img = '<img src="https://www.chinahottour.ru/uploads/allimg/culture/ji.jpg" alt="">'
            title = '<h2>Петух</h2>';
            description = '<p>Ненавидит слышать и принимать искренность</p>';
            break;
        case year == 1 || year == 2:
            img = '<img src="https://www.chinahottour.ru/uploads/allimg/culture/gou.jpg" alt="">'
            title = '<h2>Собака</h2>';
            description = '<p>Трудолюбивый</p>';
            break;
        case year == 2 || year == 3:
            img = '<img src="https://www.chinahottour.ru/uploads/allimg/culture/zhu.jpg" alt="">'
            title = '<h2>Свинья</h2>';
            description = '<p>Старание сделать все правильно</p>';
            break;
    }
    document.write(img + title + description);
}
