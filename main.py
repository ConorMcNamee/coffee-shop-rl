from playwright.sync_api import sync_playwright
from enum import Enum
from action import Action, AmountAction

game_url = "https://www.coolmathgames.com/0-coffee-shop/play"

class State(Enum):
    TUTORIAL = "screen-tutorial1"
    CREDITS = "screen-credits"
    SHOP = "shop"
    DAY = "day"
    DAY_STATS = "screen-day-stats"
    RESULTS = "results"
    UNKNOWN = "unknown"

class CoffeeShop:
    def __init__(self, headless=False):
        self.playwright = sync_playwright().start()
        self.browser = self.playwright.chromium.launch(
            headless=headless
        )
        
        self.page = self.browser.new_page()

        self.page.goto(game_url)

        self.do(Action.CONSENT)
        self.do(Action.PLAY_GAME)
        self.do(Action.END_TUTORIAL)
        self.do(Action.TUTORIAL_NEXT)

        self.set_slider(AmountAction.SET_COFFEE_RECIPE, 4)
        self.set_slider(AmountAction.SET_MILK_RECIPE, 4)
        self.set_slider(AmountAction.SET_SUGAR_RECIPE, 4)
        self.set_slider(AmountAction.SET_PRICE, 10)



        # Get env and then we are done for this step

        self.page.wait_for_timeout(100000)

    def do(self, action: AmountAction):
        selector = action.value
        self.page.locator(selector).wait_for()
        self.page.locator(selector=selector).click()

    def set_slider(self, action: AmountAction, value: float):
        selector = action.value

        slider = self.page.locator(
            selector=selector
        )
        handle = slider.locator("button")

        min_value = float(slider.get_attribute("data-min"))
        max_value = float(slider.get_attribute("data-max"))

        value = max(min_value, min(max_value, value))

        slider_box = slider.bounding_box()
        handle_box = handle.bounding_box()

        if not slider_box or not handle_box:
            raise RuntimeError("Slider not visible")

        # Fraction through the game's range.
        fraction = (value - min_value) / (max_value - min_value)

        # Convert that fraction to rendered browser pixels.
        travel = slider_box["width"] - handle_box["width"]
        target_x = slider_box["x"] + (travel * fraction) + handle_box["width"] / 2
        target_y = handle_box["y"] + handle_box["height"] / 2

        self.page.mouse.move(
            handle_box["x"] + handle_box["width"] / 2,
            target_y
        )
        self.page.mouse.down()
        self.page.mouse.move(target_x, target_y)
        self.page.mouse.up()

if __name__ == '__main__':
    game = CoffeeShop()
