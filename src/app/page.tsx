export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 py-16">
      <p className="text-sm tracking-[0.18em] text-accent uppercase">
        AUTO INTEL
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground">
        Локальная версия запущена
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
        Каркас приложения готов. Оболочка, поиск и карточки автомобилей ещё
        не собраны. Площадки объявлений не подключены, и на этой странице нет
        демонстрационных цен или оценок.
      </p>
      <section className="mt-10 rounded-2xl border border-line bg-card p-6">
        <h2 className="text-base font-medium text-foreground">
          Следующий шаг
        </h2>
        <p className="mt-2 leading-7 text-muted">
          Общая оболочка с боковым меню и пустые разделы: Обзор, Поиск,
          ИИ-агенты, Аналитика, История объявлений, Мои сделки и Настройки.
        </p>
      </section>
    </main>
  );
}
