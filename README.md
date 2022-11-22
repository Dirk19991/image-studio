



## Кто хочет стать миллионером?

Игра "Кто хочет стать миллионером?" с вопросами на frontend-тематику.

Ссылка на GitHub Pages:  https://dirk19991.github.io/who-wants-to-be-a-millionaire/

## Стек

[![My Skills](https://skillicons.dev/icons?i=react,redux,js,materialui)](https://skillicons.dev)

## Полное описание

Я увлекаюсь интеллектуальными играми, поэтому этот проект был интересен для меня в первую очередь с точки написания интересных и сложных вопросов и логики игры. Макета в этом проекте не было, поэтому я вдохновлялся телевизионной и старой компьютерными версиями игры "Кто хочет стать миллионером?".


1. Реализованы десктопная и мобильная версии игры:
<img src="https://user-images.githubusercontent.com/104031523/203271414-2b4a7416-6da1-4f4b-87c7-f9cb3cbd2aaf.png" alt="Alt text" title="Optional title" width=70% height=70%>

<img src="https://sun9-20.userapi.com/impg/MzPvX4a8XIVkafypL3uhvznwM3PqOMm_aB5SYw/dugY3hh0UkQ.jpg?size=738x1600&quality=95&sign=d6f3bc651b14015ea1e06eb8056765ef&type=album" alt="Alt text" title="Optional title" width=30% height=30%>

2. Логика подсказок реализована следующим образом: в зависимости от прогресса в игре функция высчитывает вероятность, с которой будет подсказан верный ответ - для вопросов 1-5 - 100%, 6-10 - 70%, 11-15 - 40%. При этом для помощи зала дополнительно подсчитывается процент аудитории, которая дала верный ответ - чем вопрос дороже, тем процент в среднем меньше. Сами подсказки реализованы с помощью модального окна Material UI:

<img src="https://user-images.githubusercontent.com/104031523/203282459-e14c1fc9-bd92-482b-9fef-00ae54ec9ff1.png" alt="Alt text" title="Optional title" width=70% height=70%>

3. Чтобы игру не пришлось проходить заново, неправильно отвеченный вопрос при желании можно пропустить. При этом он будет засчитан как верный, и будет задан следующий вопрос
<img src="https://user-images.githubusercontent.com/104031523/203281420-edfcc501-a5aa-4070-b1dc-3d8ddfa7cea8.gif" alt="Alt text" title="Optional title" width=100% height=100%>

## Инструкция по установке

```
git clone https://github.com/Dirk19991/who-wants-to-be-a-millionaire.git
cd .\who-wants-to-be-a-millionaire\
npm install
npm start
```
