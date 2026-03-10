from fastapi import APIRouter
from ai_modules.bias_detection import detect_bias
from ai_modules.fairness_metrics import calculate_fairness

router = APIRouter()

@router.get("/bias_report")
def bias_report():

    data = detect_bias()

    fairness = calculate_fairness(data)

    return {
        "bias_data": data,
        "fairness_metrics": fairness
    }