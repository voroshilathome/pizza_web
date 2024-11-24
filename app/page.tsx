import { Categories, Container, SortPopup, Title, TopBar } from "@/components/shared";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return ( 
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]"> {/*60пикс между фильтрацией и товаром */}

          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>


          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
            <ProductsGroupList 
              title="Пиццы" 
              items={[
              {
                id: 1,
                name: 'Чизбергер-пицца',
                imageUrl: 
                  'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 2,
                name: 'Чизбергер-пицца',
                imageUrl: 
                  'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 3,
                name: 'Чизбергер-пицца',
                imageUrl: 
                  'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 4,
                name: 'Чизбергер-пицца',
                imageUrl: 
                  'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 5,
                name: 'Чизбергер-пицца',
                imageUrl: 
                  'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 6,
                name: 'Чизбергер-пицца',
                imageUrl: 
                  'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 7,
                name: 'Чизбергер-пицца',
                imageUrl: 
                  'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 8,
                name: 'Чизбергер-пицца',
                imageUrl: 
                  'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 9,
                name: 'Чизбергер-пицца',
                imageUrl: 
                  'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                price: 550,
                items: [{ price: 550 }],
              },
            ]} 
            categoryId={1} />

<ProductsGroupList 
              title="Комбо"
              categoryId={2} 
              items={[
              {
                id: 1,
                name: 'Чизбергер-пицца',
                imageUrl: 
                  'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 2,
                name: 'Чизбергер-пицца',
                imageUrl: 
                  'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 3,
                name: 'Чизбергер-пицца',
                imageUrl: 
                  'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 4,
                name: 'Чизбергер-пицца',
                imageUrl: 
                  'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 5,
                name: 'Чизбергер-пицца',
                imageUrl: 
                  'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 6,
                name: 'Чизбергер-пицца',
                imageUrl: 
                  'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 7,
                name: 'Чизбергер-пицца',
                imageUrl: 
                  'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 8,
                name: 'Чизбергер-пицца',
                imageUrl: 
                  'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 9,
                name: 'Чизбергер-пицца',
                imageUrl: 
                  'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                price: 550,
                items: [{ price: 550 }],
              },
            ]} 
           />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}